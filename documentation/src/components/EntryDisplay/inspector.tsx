import { useCallback, useState } from "react";
import { blueprints, CustomField, FieldInfo, findEntry, getModifier, ListField, MapField, ObjectField, Page, PrimitiveField } from "./data";
import { EntryNodeProps } from "./graph";
import { Node, useOnSelectionChange } from "reactflow";
import { format } from ".";
import { Icon } from "@iconify/react/dist/iconify.js";

interface EntryInspectorProps {
    pages: Page[];
}

export default function EntryInspector({ pages }: EntryInspectorProps) {
    const [selectedNodes, setSelectedNodes] = useState<Node<EntryNodeProps, string>[]>([]);

    const onChange = useCallback(({ nodes }: { nodes: Node<EntryNodeProps, string>[] }) => {
        setSelectedNodes(nodes);
    }, [])

    useOnSelectionChange({
        onChange
    });

    return <div className="sm:h-[35em] w-full sm:w-80 md:w-96 p-4 overflow-y-auto">
        {selectedNodes.length === 0 && <EmptyInspector />}
        {selectedNodes.length === 1 && <SingleNodeInspector node={selectedNodes[0]} pages={pages} />}
        {selectedNodes.length > 1 && <MultipleNodesInspector />}
    </div>;
}

function EmptyInspector() {
    return <div className="">
        <div className="text-xl font-bold pb-2">
            Interactive Graph
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is an interactive graph of all the entries in the selected pages.
            <br />
            You can view different pages by clicking on the tabs.
            Each page contains a view of the entries in that page.
            <br />
            <span className="font-semibold">
                Click on an entry to view its details.
            </span>
        </p>
    </div>;
}

function MultipleNodesInspector() {
    return <div className="">
        <div className="text-xl font-bold pb-2">
            Multiple Nodes Selected
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
            The inspector can only show one entry at a time.
            <br />
            <span className="font-semibold">
                Click on an entry to view its details.
            </span>
        </p>
    </div>;
}

function SingleNodeInspector({ node, pages }: { node: Node<EntryNodeProps, string>, pages: Page[] }) {
    const entry = node.data.entry;
    const blueprint = blueprints.get(entry.type);
    if (blueprint == null) return null;

    return <div className="">
        <div className="text-xl font-bold mb-2" style={{ color: blueprint.color }}>
            {format(entry.name)}
        </div>
        <div className="text-sm hover:underline" style={{ color: blueprint.color }}>
            {format(blueprint.name)}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs">
            {blueprint.description}
        </p>

        <ObjectFieldInspector fieldInfo={blueprint.fields} path="" value={entry} pages={pages} ignoreFields={["id", "name"]} />
    </div>;
}

function SimpleValueField({ value, icon }: { value: any, icon: string }) {
    return <div className="rounded-md bg-[#0000000d] dark:bg-[#00000033] p-2 text-gray-700 dark:text-white text-xs w-full flex items-center">
        <Icon icon={icon} className="w-5 h-5 mr-2" />
        {value}
    </div>;
}

function FieldInspector({ fieldInfo, path, value, pages }: { fieldInfo: FieldInfo, path: string, value: any, pages: Page[] }) {
    const type = fieldInfo.kind;
    if (type === "primitive") {
        return <PrimitiveFieldInspector fieldInfo={fieldInfo as PrimitiveField} path={path} value={value} />;
    }
    if (type === "enum") {
        return <EnumFieldInspector value={value} />;
    }
    if (type === "list") {
        return <ListFieldInspector fieldInfo={fieldInfo as ListField} path={path} value={value} pages={pages} />;
    }
    if (type === "map") {
        return <MapFieldInspector fieldInfo={fieldInfo as MapField} path={path} value={value} pages={pages} />;
    }
    if (type === "object") {
        return <ObjectFieldInspector fieldInfo={fieldInfo as ObjectField} path={path} value={value} pages={pages} />;
    }
    if (type === "custom") {
        return <CustomFieldInspector fieldInfo={fieldInfo as CustomField} path={path} value={value} pages={pages} />;
    }
    return <div className="text-red-500 dark:text-red-400 text-xs">
        Unknown field type: {type}
    </div>;
}

function PrimitiveFieldInspector({ fieldInfo, value, path }: { fieldInfo: PrimitiveField, value: any, path: string }) {
    if (fieldInfo.type === "boolean") {
        return <div className="text-gray-500 dark:text-gray-400 text-xs w-full flex items-center">
            <input type="checkbox" checked={value ? true : false} readOnly className="mr-2 accent-green-500" key={path} />
            {value ? <span className="text-green-500 dark:text-green-400">true</span> : <span className="text-red-500 dark:text-red-400">false</span>}
        </div>;
    }

    let icon: string
    if (fieldInfo.type === "string") {
        icon = "mdi:text-box-outline";
    } else if (fieldInfo.type === "integer" || fieldInfo.type === "double") {
        icon = "fa6-solid:hashtag";
    } else if (fieldInfo.type === "boolean") {
        icon = "mdi:checkbox-marked-circle-outline";
    }
    return <SimpleValueField value={value} icon={icon} />;
}

function EnumFieldInspector({ value }: { value: any }) {
    return <SimpleValueField value={value} icon="fa-solid:list" />;
}

function ListFieldInspector({ fieldInfo, path, value, pages }: { fieldInfo: ListField, path: string, value: any[], pages: Page[] }) {
    const pathParts = path.split(".");
    const lastPathPart = pathParts[pathParts.length - 1];
    return <div className="">
        <div className="text-gray-500 dark:text-gray-400 text-xs pl-2 space-y-3">
            {value.length === 0 && <div className="text-gray-500 dark:text-gray-400 text-xs">No {lastPathPart} found</div>}
            {value.map((item, index) => <div key={index} className="flex flex-col space-y-1">
                <div className="w-full text-sm">{format(lastPathPart)} ({index})</div>
                <div className="w-full text-sm">
                    <FieldInspector fieldInfo={fieldInfo.type} path={`${path}.${index}`} value={item} pages={pages} />
                </div>
            </div>)}
        </div>
    </div>;
}

function MapFieldInspector({ fieldInfo, path, value, pages }: { fieldInfo: MapField, path: string, value: any, pages: Page[] }) {
    const keyType = fieldInfo.key.kind;
    const valueType = fieldInfo.value.kind;
    if (keyType === "primitive" && valueType === "primitive") {
        return <div className="text-gray-500 dark:text-gray-400 text-xs">
            {path}: {value}
        </div>;
    }
    return <div className="text-gray-500 dark:text-gray-400 text-xs">
        {path}: {value}
    </div>;
}

function ObjectFieldInspector({ fieldInfo, path, value, pages, ignoreFields = [] }: { fieldInfo: ObjectField, path: string, value: any, pages: Page[], ignoreFields?: string[] }) {
    const fields = Object.entries(fieldInfo.fields).filter(([key]) => !ignoreFields?.includes(key));
    const seperator = path.length > 0 ? `.` : "";
    return <div className={`text-gray-700 dark:text-gray-300 text-xs space-y-3 ${path.length > 0 ? "pl-2" : ""}`}>
        {fields.map(([key, field]) => <div key={key} className="flex flex-col space-y-1">
            <div className="w-full text-sm">{format(key)}</div>
            <div className="w-full text-sm">
                <FieldInspector fieldInfo={field} path={`${path}${seperator}${key}`} value={value[key]} pages={pages} />
            </div>
        </div>)}
    </div>;
}

function CustomFieldInspector({ fieldInfo, path, value, pages }: { fieldInfo: CustomField, path: string, value: any, pages: Page[] }) {
    const editor = fieldInfo.editor;
    if (editor === "entryReference") {
        return <EntryReferenceField entryId={value} pages={pages} />;
    }
    if (editor === "item") {
        return <ItemField {...value} />;
    }
    if (editor === "location" || editor === "vector") {
        return <LocationField value={{ ...value }} field={fieldInfo} />;
    }
    if (editor === "duration") {
        return <DurationField duration={value} />;
    }
    if (editor === "soundId") {
        return <SoundIdField {...value} />;
    }
    if (editor === "soundSource") {
        return <SoundSourceField {...value} pages={pages} />;
    }
    if (editor === "optional") {
        return <OptionalField value={value} field={fieldInfo} path={path} pages={pages} />;
    }
    return <div className="text-red-500 dark:text-red-400 text-xs">
        Unknown custom editor: {editor}
    </div>;
}

function EntryReferenceField({ entryId, pages }: { entryId: any, pages: Page[] }) {
    if (!entryId) {
        return <SimpleValueField value="No Entry Referenced" icon="material-symbols:link-off" />;
    }
    const entry = findEntry(pages, entryId);
    if (entry == null) return <div className="text-red-500 dark:text-red-400 text-xs">
        Could not find entry with id {entryId}
    </div>;
    const blueprint = blueprints.get(entry.type);
    if (blueprint == null) return <div className="text-red-500 dark:text-red-400 text-xs">
        Could not find blueprint for entry with id {entryId}
    </div>;

    return <div className="text-white text-xs rounded-md p-2" style={{ backgroundColor: blueprint.color }}>
        <div className="flex items-center">
            <Icon icon={blueprint.icon} className="w-5 h-5 mr-2" />
            <div className="flex flex-col items-start">
                <span className="text-sm">
                    {format(entry.name)}
                </span>
                <span className="text-[10px] opacity-70 m-0">
                    {format(blueprint.name)}
                </span>
            </div>
        </div>
    </div>;
}

interface ItemFieldProps {
    material: ItemProperty<string>;
    amount: ItemProperty<number>;
    name: ItemProperty<string>;
    lore: ItemProperty<string>;
    flags: ItemProperty<string[]>;
    nbt: ItemProperty<string>;
}

interface ItemProperty<T> {
    enabled: boolean;
    value: T;
}

function ItemField(props: ItemFieldProps) {
    const anyEnabled = Object.values(props).some((prop) => prop.enabled);
    return <div className="pl-2">
        {!anyEnabled && <div className="text-gray-500 dark:text-gray-400 text-xs">No item data found</div>}
        {props.material.enabled && <div>
            Material
            <SimpleValueField value={props.material.value} icon="mdi:cube-outline" />
        </div>}
        {props.amount.enabled && <div>
            Amount
            <SimpleValueField value={props.amount.value} icon="fa6-solid:hashtag" />
        </div>}
        {props.name.enabled && <div>
            Name
            <SimpleValueField value={props.name.value} icon="mdi:text-box-outline" />
        </div>}
        {props.lore.enabled && <div>
            Lore
            <SimpleValueField value={props.lore.value} icon="mdi:text-box-outline" />
        </div>}
        {props.flags.enabled && <div>
            Flags
            <SimpleValueField value={props.flags.value} icon="mdi:checkbox-marked-circle-outline" />
        </div>}
        {props.nbt.enabled && <div>
            NBT
            <SimpleValueField value={props.nbt.value} icon="mdi:text-box-outline" />
        </div>}
    </div>;
}

interface LocationFieldProps {
    value: LocationField;
    field: FieldInfo | null;
}
interface LocationField {
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
}
function LocationField({ value, field }: LocationFieldProps) {
    const { x, y, z, yaw, pitch } = value;
    if (isNaN(x) || isNaN(y) || isNaN(z)) return null;
    const hasRotation = field != null && getModifier(field, "with_rotation") != null;
    if (hasRotation && (isNaN(yaw) || isNaN(pitch))) return null;
    return <div className="w-full flex flex-col items-center space-y-2">
        <div className="flex items-start w-full space-x-2">
            <CordPropertyField value={x} display="X" color="text-red-500" />
            <CordPropertyField value={y} display="Y" color="text-green-500" />
            <CordPropertyField value={z} display="Z" color="text-blue-500" />
        </div>
        {hasRotation && <div className="flex items-start w-full space-x-2">
            <CordPropertyField value={yaw} display="Yaw" color="text-purple-500" />
            <CordPropertyField value={pitch} display="Pitch" color="text-yellow-500" />
        </div>}
    </div>;
}

interface CordPropertyFieldProps {
    value: number;
    display: string;
    color: string;
}
function CordPropertyField({ value, display, color }: CordPropertyFieldProps) {
    return <div className="rounded-md bg-[#0000000d] dark:bg-[#00000033] p-2 text-gray-700 dark:text-white text-xs inline-flex w-full justify-center">
        <div className={`${color}`}>
            {display}:&nbsp;
        </div>
        {value}
    </div>;
}

// Converts a duration in milliseconds to a human readable format.
// Only shows the days, hours, minutes, and seconds and milliseconds if they are not 0.
// Example: 1d 2h 3m 4s 5ms
function formatDuration(duration: number): string {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(duration % 1000);

    let formatted = '';
    if (days > 0) {
        formatted += `${days}d `;
    }
    if (hours > 0) {
        formatted += `${hours}h `;
    }
    if (minutes > 0) {
        formatted += `${minutes}m `;
    }
    if (seconds > 0) {
        formatted += `${seconds}s `;
    }
    if (milliseconds > 0) {
        formatted += `${milliseconds}ms `;
    }

    return formatted.trim();
}

function DurationField({ duration }: { duration: number }) {
    const formatted = formatDuration(duration);
    return <div className="rounded-md bg-[#0000000d] dark:bg-[#00000033] p-2 text-gray-700 dark:text-white text-xs w-full flex items-center">
        <Icon icon="mdi:clock" className="w-5 h-5 mr-2" />
        {formatted}
    </div>;
}

function SoundIdField({ value }: { value: string }) {
    return <SimpleValueField value={value} icon="mdi:volume-high" />;
}

interface SoundSourceFieldProps {
    type: "self" | "emitter" | "location";
    entryId: string;
    location: LocationField;
    pages: Page[];
}

function SoundSourceField({ type, entryId, location, pages }: SoundSourceFieldProps) {
    if (type === "self") {
        return <SimpleValueField value="Self" icon="mdi:volume-high" />;
    }
    if (type === "emitter") {
        return <EntryReferenceField entryId={entryId} pages={pages} />;
    }
    if (type === "location") {
        return <LocationField value={location} field={null} />;
    }
    return <div className="text-red-500 dark:text-red-400 text-xs">
        Unknown sound source type: {type}
    </div>;
}

interface OptionalFieldProps {
    value: { enabled: boolean, value: any };
    field: CustomField;
    path: string;
    pages: Page[];
}

function OptionalField({ value, field, path, pages }: OptionalFieldProps) {
    if (value == null) return null;
    const fieldInfo = field.fieldInfo;
    if (fieldInfo == null) return null;
    const enabled = value.enabled;
    const seperator = path.length > 0 ? "." : "";
    return <div className={"flex flex-row" + (enabled ? "" : " opacity-50 cursor-not-allowed")}>
        <input type="checkbox" checked={enabled} readOnly className="mr-2 accent-green-500" key={path} />
        <FieldInspector fieldInfo={fieldInfo} path={`${path}${seperator}value`} value={value.value} pages={pages} />
    </div>;
}