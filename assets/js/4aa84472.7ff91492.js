"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83330],{64041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var i=t(74848),r=t(28453),a=t(71625);const s={},l="ArtifactEntry",o={id:"develop/extensions/entries/static/artifact",title:"ArtifactEntry",description:"The ArtifactEntry is a specialized interface derived from AssetEntry.",source:"@site/docs/develop/02-extensions/04-entries/static/artifact.mdx",sourceDirName:"develop/02-extensions/04-entries/static",slug:"/develop/extensions/entries/static/artifact",permalink:"/beta/develop/extensions/entries/static/artifact",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-extensions/04-entries/static/artifact.mdx",tags:[],version:"current",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1725553323e3,frontMatter:{},sidebar:"develop",previous:{title:"AudienceEntry",permalink:"/beta/develop/extensions/entries/manifest/audience"},next:{title:"AssetEntry",permalink:"/beta/develop/extensions/entries/static/asset"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Defining an ArtifactEntry",id:"defining-an-artifactentry",level:3},{value:"Accessing the Artifact&#39;s Content",id:"accessing-the-artifacts-content",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"artifactentry",children:"ArtifactEntry"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ArtifactEntry"})," is a specialized interface derived from ",(0,i.jsx)(n.code,{children:"AssetEntry"}),".\nIts primary purpose is to handle artifacts, which are assets generated by the extensions.\nUnlike standard assets, artifacts are usually dynamic and created during runtime.\nThis makes them particularly useful for storing data that changes based on player interactions or game events."]}),"\n",(0,i.jsxs)(n.p,{children:["An essential feature of ",(0,i.jsx)(n.code,{children:"ArtifactEntry"})," is its unique ",(0,i.jsx)(n.code,{children:"artifactId"}),".\nThis identifier must remain constant once assigned and is used to reference the artifact within the plugin."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["Here's a generic example of creating and using an ",(0,i.jsx)(n.code,{children:"ArtifactEntry"}),":"]}),"\n",(0,i.jsx)(n.h3,{id:"defining-an-artifactentry",children:"Defining an ArtifactEntry"}),"\n",(0,i.jsx)(a.A,{tag:"artifact_entry",json:t(76590)}),"\n",(0,i.jsx)(n.h3,{id:"accessing-the-artifacts-content",children:"Accessing the Artifact's Content"}),"\n",(0,i.jsx)(a.A,{tag:"artifact_access",json:t(76590)}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we get the content of the given artifact reference by using the ",(0,i.jsx)(n.code,{children:"AssetManager"}),".\nThe ",(0,i.jsx)(n.code,{children:"assetManager.fetchAsset"})," method is then used to retrieve the content of the artifact, based the ",(0,i.jsx)(n.code,{children:"entry"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71625:(e,n,t)=>{t.d(n,{A:()=>s});const i={initializer:{file:"src/main/kotlin/com/typewritermc/example/ExampleInitializer.kt",content:"import com.typewritermc.core.extension.Initializable\nimport com.typewritermc.core.extension.annotations.Initializer\n\n@Initializer\nobject ExampleInitializer : Initializable {\n    override fun initialize() {\n        // Do something when the extension is initialized\n    }\n\n    override fun shutdown() {\n        // Do something when the extension is shutdown\n    }\n}"},cinematic_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'@Entry("example_cinematic", "An example cinematic entry", Colors.BLUE, "material-symbols:cinematic-blur")\nclass ExampleCinematicEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    val segments: List<ExampleSegment> = emptyList(),\n) : CinematicEntry {\n    override fun create(player: Player): CinematicAction {\n        return ExampleCinematicAction(player, this)\n    }\n}'},cinematic_segment_with_min_max:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    @InnerMin(Min(10))\n    @InnerMax(Max(20))\n    val segments: List<ExampleSegment> = emptyList(),'},cinematic_create_actions:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"    // This will be used when the cinematic is normally displayed to the player.\n    override fun create(player: Player): CinematicAction {\n        return DefaultCinematicAction(player, this)\n    }\n\n    // This is used during content mode to display the cinematic to the player.\n    // It may be null to not show it during simulation.\n    override fun createSimulating(player: Player): CinematicAction? {\n        return SimulatedCinematicAction(player, this)\n    }\n\n    // This is used during content mode to record the cinematic.\n    // It may be null to not record it during simulation.\n    override fun createRecording(player: Player): CinematicAction? {\n        return RecordingCinematicAction(player, this)\n    }"},cinematic_segment:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"data class ExampleSegment(\n    override val startFrame: Int = 0,\n    override val endFrame: Int = 0,\n) : Segment"},cinematic_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleCinematicAction(\n    val player: Player,\n    val entry: ExampleCinematicEntry,\n) : CinematicAction {\n    override suspend fun setup() {\n        // Initialize variables, spawn entities, etc.\n    }\n\n    override suspend fun tick(frame: Int) {\n        val segment = entry.segments activeSegmentAt frame\n        // Can be null if no segment is active\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n\n        // Execute tick logic for the segment\n    }\n\n    override suspend fun teardown() {\n        // Remove entities, etc.\n    }\n\n    override fun canFinish(frame: Int): Boolean = entry.segments canFinishAt frame\n}"},cinematic_simple_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleSimpleCinematicAction(\n    val player: Player,\n    entry: ExampleCinematicEntry,\n) : SimpleCinematicAction<ExampleSegment>() {\n    override val segments: List<ExampleSegment> = entry.segments\n\n    override suspend fun startSegment(segment: ExampleSegment) {\n        super.startSegment(segment) // Keep this\n        // Called when a segment starts\n    }\n\n    override suspend fun tickSegment(segment: ExampleSegment, frame: Int) {\n        super.tickSegment(segment, frame) // Keep this\n        // Called every tick while the segment is active\n        // Will always be called after startSegment and never after stopSegment\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n    }\n\n    override suspend fun stopSegment(segment: ExampleSegment) {\n        super.stopSegment(segment) // Keep this\n        // Called when the segment ends\n        // Will also be called if the cinematic is stopped early\n    }\n}"},audience_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:'@Entry("example_audience", "An example audience entry.", Colors.GREEN, "material-symbols:chat-rounded")\nclass ExampleAudienceEntry(\n    override val id: String,\n    override val name: String,\n) : AudienceEntry {\n    override fun display(): AudienceDisplay {\n        return ExampleAudienceDisplay()\n    }\n}'},audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class ExampleAudienceDisplay : AudienceDisplay() {\n    override fun initialize() {\n        // This is called when the first player is added to the audience.\n        super.initialize()\n        // Do something when the audience is initialized\n    }\n\n    override fun onPlayerAdd(player: Player) {\n        // Do something when a player gets added to the audience\n    }\n\n    override fun onPlayerRemove(player: Player) {\n        // Do something when a player gets removed from the audience\n    }\n\n    override fun dispose() {\n        super.dispose()\n        // Do something when the audience is disposed\n        // It will always call onPlayerRemove for all players.\n        // So no player cleanup is needed here.\n    }\n}"},tickable_audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"// highlight-next-line\nclass TickableAudienceDisplay : AudienceDisplay(), TickableDisplay {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    override fun tick() {\n        // Do something when the audience is ticked\n        players.forEach { player ->\n            // Do something with the player\n        }\n\n        // This is running asynchronously\n        // If you need to do something on the main thread\n        ThreadType.SYNC.launch {\n            // Though this will run a tick later, to sync with the bukkit scheduler.\n        }\n    }\n    // highlight-end\n}"},audience_display_with_events:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class AudienceDisplayWithEvents : AudienceDisplay() {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    @EventHandler\n    fun onSomeEvent(event: SomeBukkitEvent) {\n        // Do something when the event is triggered\n        // This will trigger for all players, not just the ones in the audience.\n        // So we need to check if the player is in the audience.\n        if (event.player in this) {\n            // Do something with the player\n        }\n    }\n    // highlight-end\n}"},artifact_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:'@Entry("example_artifact", "An example artifact entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleArtifactEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val artifactId: String = "",\n) : ArtifactEntry'},artifact_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:"suspend fun accessArtifactData(ref: Ref<out ArtifactEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},asset_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:'@Entry("example_asset", "An example asset entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleAssetEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val path: String = "",\n) : AssetEntry'},asset_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:"suspend fun accessAssetData(ref: Ref<out AssetEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},sound_id_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundIdEntry.kt",content:'@Entry("example_sound", "An example sound entry.", Colors.BLUE, "icon-park-solid:volume-up")\nclass ExampleSoundIdEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val soundId: String = "",\n) : SoundIdEntry'},sound_source_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundSourceEntry.kt",content:'@Entry("example_sound_source", "An example sound source entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSoundSourceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : SoundSourceEntry {\n    override fun getEmitter(): Sound.Emitter {\n        // Return the emitter that should be used for the sound.\n        // A bukkit entity can be used here.\n        return Sound.Emitter.self()\n    }\n}'},speaker_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSpeakerEntry.kt",content:'@Entry("example_speaker", "An example speaker entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSpeakerEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val displayName: String = "",\n    override val sound: Sound = Sound.EMPTY,\n) : SpeakerEntry'},action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleActionEntry.kt",content:'@Entry("example_action", "An example action entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : ActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply all the modifiers.\n        // Do something with the player\n    }\n}'},custom_triggering_action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleCustomTriggeringActionEntry.kt",content:'@Entry(\n    "example_custom_triggering_action",\n    "An example custom triggering entry.",\n    Colors.RED,\n    "material-symbols:touch-app-rounded"\n)\nclass ExampleCustomTriggeringActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    @SerializedName("triggers")\n    override val customTriggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : CustomTriggeringActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply the modifiers.\n        // Do something with the player\n        player.triggerCustomTriggers() // Can be called later to trigger the next entries.\n    }\n}'},dialogue_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Entry("example_dialogue", "An example dialogue entry.", Colors.BLUE, "material-symbols:chat-rounded")\nclass ExampleDialogueEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val speaker: Ref<SpeakerEntry> = emptyRef(),\n    @MultiLine\n    @Placeholder\n    @Colored\n    @Help("The text to display to the player.")\n    val text: String = "",\n) : DialogueEntry'},dialogue_messenger:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Messenger(ExampleDialogueEntry::class)\nclass ExampleDialogueDialogueMessenger(player: Player, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, entry) {\n\n    companion object : MessengerFilter {\n        override fun filter(player: Player, entry: DialogueEntry): Boolean = true\n    }\n\n    // Called every game tick (20 times per second).\n    // The cycle is a parameter that is incremented every tick, starting at 0.\n    override fun tick(playTime: Duration) {\n        super.tick(playTime)\n        if (state != MessengerState.RUNNING) return\n\n        player.sendMessage("${entry.speakerDisplayName}: ${entry.text}".parsePlaceholders(player).asMini())\n\n        // When we want the dialogue to end, we can set the state to FINISHED.\n        state = MessengerState.FINISHED\n    }\n}'},event_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:'@Entry("example_event", "An example event entry.", Colors.YELLOW, "material-symbols:bigtop-updates")\nclass ExampleEventEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : EventEntry'},event_entry_listener:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:"// Must be scoped to be public\n@EntryListener(ExampleEventEntry::class)\nfun onEvent(event: SomeBukkitEvent, query: Query<ExampleEventEntry>) {\n    // Do something\n    val entries = query.find() // Find all the entries of this type, for more information see the Query section\n    // Do something with the entries, for example trigger them\n    entries triggerAllFor event.player\n}"}};var r=t(2250),a=t(74848);function s(e){let n,{tag:t,json:s}=e;if(!s)throw new Error("JSON not provided");if(n=Object.keys(s).length>0?s[t]:i[t],null==n)return(0,a.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t]});const{file:l,content:o}=n;if(null==l||null==o)return(0,a.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t," (",n,")"]});const c=l.split("/").pop();return(0,a.jsx)(r.A,{language:"kotlin",showLineNumbers:!0,title:c,children:o})}},76590:e=>{e.exports={}}}]);