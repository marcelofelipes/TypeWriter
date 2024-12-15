"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9913],{88545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});let i=JSON.parse('{"id":"develop/extensions/entries/manifest/audience","title":"AudienceEntry","description":"AudienceEntry is a crucial component in Typewriter that allows extension developers to display content to a group of players.","source":"@site/docs/develop/02-extensions/04-entries/manifest/audience.mdx","sourceDirName":"develop/02-extensions/04-entries/manifest","slug":"/develop/extensions/entries/manifest/audience","permalink":"/beta/develop/extensions/entries/manifest/audience","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-extensions/04-entries/manifest/audience.mdx","tags":[],"version":"current","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734267424000,"frontMatter":{},"sidebar":"develop","previous":{"title":"CinematicEntry","permalink":"/beta/develop/extensions/entries/cinematic/"},"next":{"title":"Placeholder","permalink":"/beta/develop/extensions/entries/placeholder"}}');var r=t(74848),a=t(28453),l=t(26137);let s={},o="AudienceEntry",c={},d=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Basic AudienceEntry",id:"basic-audienceentry",level:3},{value:"AudienceDisplay",id:"audiencedisplay",level:3},{value:"Tickable Audience Display",id:"tickable-audience-display",level:3},{value:"Event Handling",id:"event-handling",level:3},{value:"Best Practices",id:"best-practices",level:2}];function m(e){let n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"audienceentry",children:"AudienceEntry"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AudienceEntry"})," is a crucial component in Typewriter that allows extension developers to display content to a group of players.\nTypewriter manages the players in the audience, providing hooks that developers can use to show information or interact with the players in the audience."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AudienceEntry"})," is the most used ",(0,r.jsx)(n.code,{children:"ManifestEntry"})," in Typewriter."]}),"\n",(0,r.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Stateful Displays"}),": In Typewriter, entries are not allowed to have any state. ",(0,r.jsx)(n.code,{children:"AudienceEntry"})," bridges this gap by providing a way to have stateful displays."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Audience Management"}),": Typewriter takes care of managing the players in the audience. Developers can focus on defining how to display content and interact with the audience."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Display Lifecycle"}),": The ",(0,r.jsx)(n.code,{children:"AudienceDisplay"})," class manages the lifecycle of the audience, including initialization, player addition/removal, and disposal."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.h3,{id:"basic-audienceentry",children:"Basic AudienceEntry"}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of a basic ",(0,r.jsx)(n.code,{children:"AudienceEntry"})," implementation:"]}),"\n",(0,r.jsx)(l.A,{tag:"audience_entry",json:t(76590)}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we define an ",(0,r.jsx)(n.code,{children:"ExampleAudienceEntry"})," class that implements the ",(0,r.jsx)(n.code,{children:"AudienceEntry"})," interface.\nThe ",(0,r.jsx)(n.code,{children:"display()"})," function returns an ",(0,r.jsx)(n.code,{children:"AudienceDisplay"})," object, which defines how the content is presented to the audience."]}),"\n",(0,r.jsx)(n.h3,{id:"audiencedisplay",children:"AudienceDisplay"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AudienceDisplay"})," class is responsible for displaying content to the audience.\nIt has lifecycle hooks to accomplish this.\nHere's an example implementation:"]}),"\n",(0,r.jsx)(l.A,{tag:"audience_display",json:t(76590)}),"\n",(0,r.jsxs)(n.p,{children:["Key methods in ",(0,r.jsx)(n.code,{children:"AudienceDisplay"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"initialize()"}),": Called when the first player is added to the audience. Use this method for any setup tasks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onPlayerAdd(player: Player)"}),": Invoked when a player joins the audience. Use this to set up player-specific content or effects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onPlayerRemove(player: Player)"}),": Called when a player leaves the audience. Use this for cleanup of player-specific resources."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dispose()"}),": Invoked when the audience is being disposed of. Use this for general cleanup tasks. Note that ",(0,r.jsx)(n.code,{children:"onPlayerRemove"})," will be called for all players, so player-specific cleanup is not needed here."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"tickable-audience-display",children:"Tickable Audience Display"}),"\n",(0,r.jsxs)(n.p,{children:["For audiences that need to update regularly, you can implement the ",(0,r.jsx)(n.code,{children:"TickableDisplay"})," interface:"]}),"\n",(0,r.jsx)(l.A,{tag:"tickable_audience_display",json:t(76590)}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"tick()"})," method will be called every Minecraft tick (20 times per second, or every 50ms) on an asynchronous thread.\nThis allows you to update the display or perform regular actions for all players in the audience."]}),"\n",(0,r.jsx)(n.h3,{id:"event-handling",children:"Event Handling"}),"\n",(0,r.jsxs)(n.p,{children:["Every ",(0,r.jsx)(n.code,{children:"AudienceDisplay"})," is also a Bukkit listener.\nEvent listeners will only be active when at least one player is in the audience.\nHere's an example of how to handle events:"]}),"\n",(0,r.jsx)(l.A,{tag:"audience_display_with_events",json:t(76590)}),"\n",(0,r.jsxs)(n.admonition,{title:"Events for All Players",type:"caution",children:[(0,r.jsxs)(n.p,{children:["Events will trigger for ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"all"})})," players, not just those in the audience."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Always check if the player is in the audience before performing audience-specific actions."})})]}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"State Management"}),": While state is allowed within the ",(0,r.jsx)(n.code,{children:"AudienceDisplay"}),", ensure that all used state is contained within the display and does not leak outside."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Resource Management"}),": Ensure proper resource management to avoid memory leaks, especially when players leave the audience."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Event Handling"}),": When handling Bukkit events, always check if the player is in the audience before performing audience-specific actions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Asynchronous Operations"}),": Be mindful that the ",(0,r.jsx)(n.code,{children:"tick()"})," method runs on an asynchronous thread. Ensure thread safety when interacting with Bukkit API or shared resources."]}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},26137:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(74848);let r={initializer:{file:"src/main/kotlin/com/typewritermc/example/ExampleInitializer.kt",content:"import com.typewritermc.core.extension.Initializable\nimport com.typewritermc.core.extension.annotations.Initializer\n\n@Initializer\nobject ExampleInitializer : Initializable {\n    override fun initialize() {\n        // Do something when the extension is initialized\n    }\n\n    override fun shutdown() {\n        // Do something when the extension is shutdown\n    }\n}"},simple_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'class SimpleExamplePlaceholderEntry(\n    override val id: String,\n    override val name: String,\n) : PlaceholderEntry {\n    override fun parser(): PlaceholderParser = placeholderParser {\n        supply { player ->\n            "Hello, ${player?.name ?: "World"}!"\n        }\n    }\n}'},literal_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'    override fun parser(): PlaceholderParser = placeholderParser {\n        literal("greet") {\n            literal("enthusiastic") {\n                supply { player ->\n                    "HEY HOW IS YOUR DAY, ${player?.name ?: "World"}!"\n                }\n            }\n            supply { player ->\n                "Hello, ${player?.name ?: "World"}"\n            }\n        }\n        supply {\n            "Standard text"\n        }\n    }'},string_placeholder_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/ExamplePlaceholderEntry.kt",content:'    override fun parser(): PlaceholderParser = placeholderParser {\n        string("name") { name ->\n            supply {\n                "Hello, ${name()}!"\n            }\n        }\n    }'},cinematic_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'@Entry("example_cinematic", "An example cinematic entry", Colors.BLUE, "material-symbols:cinematic-blur")\nclass ExampleCinematicEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    val segments: List<ExampleSegment> = emptyList(),\n) : CinematicEntry {\n    override fun create(player: Player): CinematicAction {\n        return ExampleCinematicAction(player, this)\n    }\n}'},cinematic_segment_with_min_max:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:'    @Segments(Colors.BLUE, "material-symbols:cinematic-blur")\n    @InnerMin(Min(10))\n    @InnerMax(Max(20))\n    val segments: List<ExampleSegment> = emptyList(),'},cinematic_create_actions:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"    // This will be used when the cinematic is normally displayed to the player.\n    override fun create(player: Player): CinematicAction {\n        return DefaultCinematicAction(player, this)\n    }\n\n    // This is used during content mode to display the cinematic to the player.\n    // It may be null to not show it during simulation.\n    override fun createSimulating(player: Player): CinematicAction? {\n        return SimulatedCinematicAction(player, this)\n    }\n\n    // This is used during content mode to record the cinematic.\n    // It may be null to not record it during simulation.\n    override fun createRecording(player: Player): CinematicAction? {\n        return RecordingCinematicAction(player, this)\n    }"},cinematic_segment:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"data class ExampleSegment(\n    override val startFrame: Int = 0,\n    override val endFrame: Int = 0,\n) : Segment"},cinematic_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleCinematicAction(\n    val player: Player,\n    val entry: ExampleCinematicEntry,\n) : CinematicAction {\n    override suspend fun setup() {\n        // Initialize variables, spawn entities, etc.\n    }\n\n    override suspend fun tick(frame: Int) {\n        val segment = entry.segments activeSegmentAt frame\n        // Can be null if no segment is active\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n\n        // Execute tick logic for the segment\n    }\n\n    override suspend fun teardown() {\n        // Remove entities, etc.\n    }\n\n    override fun canFinish(frame: Int): Boolean = entry.segments canFinishAt frame\n}"},cinematic_simple_action:{file:"src/main/kotlin/com/typewritermc/example/entries/cinematic/ExampleCinematicEntry.kt",content:"class ExampleSimpleCinematicAction(\n    val player: Player,\n    entry: ExampleCinematicEntry,\n) : SimpleCinematicAction<ExampleSegment>() {\n    override val segments: List<ExampleSegment> = entry.segments\n\n    override suspend fun startSegment(segment: ExampleSegment) {\n        super.startSegment(segment) // Keep this\n        // Called when a segment starts\n    }\n\n    override suspend fun tickSegment(segment: ExampleSegment, frame: Int) {\n        super.tickSegment(segment, frame) // Keep this\n        // Called every tick while the segment is active\n        // Will always be called after startSegment and never after stopSegment\n\n        // The `frame` parameter is not necessarily next frame: `frame != old(frame)+1`\n    }\n\n    override suspend fun stopSegment(segment: ExampleSegment) {\n        super.stopSegment(segment) // Keep this\n        // Called when the segment ends\n        // Will also be called if the cinematic is stopped early\n    }\n}"},audience_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:'@Entry("example_audience", "An example audience entry.", Colors.GREEN, "material-symbols:chat-rounded")\nclass ExampleAudienceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : AudienceEntry {\n    override fun display(): AudienceDisplay {\n        return ExampleAudienceDisplay()\n    }\n}'},audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class ExampleAudienceDisplay : AudienceDisplay() {\n    override fun initialize() {\n        // This is called when the first player is added to the audience.\n        super.initialize()\n        // Do something when the audience is initialized\n    }\n\n    override fun onPlayerAdd(player: Player) {\n        // Do something when a player gets added to the audience\n    }\n\n    override fun onPlayerRemove(player: Player) {\n        // Do something when a player gets removed from the audience\n    }\n\n    override fun dispose() {\n        super.dispose()\n        // Do something when the audience is disposed\n        // It will always call onPlayerRemove for all players.\n        // So no player cleanup is needed here.\n    }\n}"},tickable_audience_display:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"// highlight-next-line\nclass TickableAudienceDisplay : AudienceDisplay(), TickableDisplay {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    override fun tick() {\n        // Do something when the audience is ticked\n        players.forEach { player ->\n            // Do something with the player\n        }\n\n        // This is running asynchronously\n        // If you need to do something on the main thread\n        ThreadType.SYNC.launch {\n            // Though this will run a tick later, to sync with the bukkit scheduler.\n        }\n    }\n    // highlight-end\n}"},audience_display_with_events:{file:"src/main/kotlin/com/typewritermc/example/entries/manifest/ExampleAudienceEntry.kt",content:"class AudienceDisplayWithEvents : AudienceDisplay() {\n    override fun onPlayerAdd(player: Player) {}\n    override fun onPlayerRemove(player: Player) {}\n\n    // highlight-start\n    @EventHandler\n    fun onSomeEvent(event: SomeBukkitEvent) {\n        // Do something when the event is triggered\n        // This will trigger for all players, not just the ones in the audience.\n        // So we need to check if the player is in the audience.\n        if (event.player in this) {\n            // Do something with the player\n        }\n    }\n    // highlight-end\n}"},artifact_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:'@Entry("example_artifact", "An example artifact entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleArtifactEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val artifactId: String = "",\n) : ArtifactEntry'},artifact_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleArtifactEntry.kt",content:"suspend fun accessArtifactData(ref: Ref<out ArtifactEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},asset_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:'@Entry("example_asset", "An example asset entry.", Colors.BLUE, "material-symbols:home-storage-rounded")\nclass ExampleAssetEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val path: String = "",\n) : AssetEntry'},asset_access:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleAssetEntry.kt",content:"suspend fun accessAssetData(ref: Ref<out AssetEntry>) {\n    val assetManager = KoinJavaComponent.get<AssetManager>(AssetManager::class.java)\n    val entry = ref.get() ?: return\n    val content: String? = assetManager.fetchAsset(entry)\n    // Do something with the content\n}"},sound_id_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundIdEntry.kt",content:'@Entry("example_sound", "An example sound entry.", Colors.BLUE, "icon-park-solid:volume-up")\nclass ExampleSoundIdEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val soundId: String = "",\n) : SoundIdEntry'},sound_source_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSoundSourceEntry.kt",content:'@Entry("example_sound_source", "An example sound source entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSoundSourceEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : SoundSourceEntry {\n    override fun getEmitter(player: Player): SoundEmitter {\n        // Return the emitter that should be used for the sound.\n        // An entity should be provided.\n        return SoundEmitter(player.entityId)\n    }\n}'},speaker_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleSpeakerEntry.kt",content:'@Entry("example_speaker", "An example speaker entry.", Colors.BLUE, "ic:round-spatial-audio-off")\nclass ExampleSpeakerEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val displayName: Var<String> = ConstVar(""),\n    override val sound: Sound = Sound.EMPTY,\n) : SpeakerEntry'},variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_variable", "An example variable entry.", Colors.GREEN, "mdi:code-tags")\nclass ExampleVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n\n        TODO("Do something with the player and the klass")\n    }\n}'},variable_entry_with_data:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_variable_with_data", "An example variable entry with data.", Colors.GREEN, "mdi:code-tags")\n// Register the variable data associated with this variable.\n@VariableData(ExampleVariableWithData::class)\nclass ExampleVariableWithDataEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // This data will be the same for all uses of this variable.\n    val someString: String = "",\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n        this.someString\n        val data = context.getData<ExampleVariableWithData>() ?: throw IllegalStateException("Could not find data for ${context.klass}, data: ${context.data}")\n\n        TODO("Do something with the player, the klass, and the data")\n    }\n}\n\nclass ExampleVariableWithData(\n    // This data can change at the place where the variable is used.\n    val otherInfo: Int = 0,\n)'},generic_variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_generic_variable", "An example generic variable entry.", Colors.GREEN, "mdi:code-tags")\nclass ExampleGenericVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // We determine how to parse this during runtime.\n    val generic: Generic = Generic.Empty,\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        val klass = context.klass\n\n        // Parse the generic data to the correct type.\n        val data = generic.get(klass)\n\n        TODO("Do something with the player, the klass, and the generic")\n    }\n}\n\nclass ExampleGenericVariableData(\n    // Generic data will always be the same as the generic type in the variable.\n    val otherGeneric: Generic,\n)'},constraint_variable_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_constraint_variable", "An example constraint variable entry.", Colors.GREEN, "mdi:code-tags")\n@GenericConstraint(String::class)\n@GenericConstraint(Int::class)\nclass ExampleConstraintVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    // We determine how to parse this during runtime.\n    val generic: Generic = Generic.Empty,\n) : VariableEntry {\n    override fun <T : Any> get(context: VarContext<T>): T {\n        val player = context.player\n        // This can only be a String or an Int.\n        val klass = context.klass\n\n        // Parse the generic data to the correct type.\n        val data = generic.get(klass)\n\n        TODO("Do something with the player, the klass, and the generic")\n    }\n}'},variable_usage:{file:"src/main/kotlin/com/typewritermc/example/entries/static/ExampleVariableEntry.kt",content:'@Entry("example_action_using_variable", "An example action that uses a variable.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionUsingVariableEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    val someString: Var<String> = ConstVar(""),\n    val someInt: Var<Int> = ConstVar(0),\n) : ActionEntry {\n    override fun execute(player: Player) {\n        val someString = someString.get(player)\n        val someInt = someInt.get(player)\n\n        // Do something with the variables\n    }\n}'},action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleActionEntry.kt",content:'@Entry("example_action", "An example action entry.", Colors.RED, "material-symbols:touch-app-rounded")\nclass ExampleActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : ActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply all the modifiers.\n        // Do something with the player\n    }\n}'},custom_triggering_action_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleCustomTriggeringActionEntry.kt",content:'@Entry(\n    "example_custom_triggering_action",\n    "An example custom triggering entry.",\n    Colors.RED,\n    "material-symbols:touch-app-rounded"\n)\nclass ExampleCustomTriggeringActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    @SerializedName("triggers")\n    override val customTriggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : CustomTriggeringActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply the modifiers.\n        // Do something with the player\n        player.triggerCustomTriggers() // Can be called later to trigger the next entries.\n    }\n}'},dialogue_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Entry("example_dialogue", "An example dialogue entry.", Colors.BLUE, "material-symbols:chat-rounded")\nclass ExampleDialogueEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    override val speaker: Ref<SpeakerEntry> = emptyRef(),\n    @MultiLine\n    @Placeholder\n    @Colored\n    @Help("The text to display to the player.")\n    val text: String = "",\n) : DialogueEntry'},dialogue_messenger:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleDialogueEntry.kt",content:'@Messenger(ExampleDialogueEntry::class)\nclass ExampleDialogueDialogueMessenger(player: Player, entry: ExampleDialogueEntry) :\n    DialogueMessenger<ExampleDialogueEntry>(player, entry) {\n\n    companion object : MessengerFilter {\n        override fun filter(player: Player, entry: DialogueEntry): Boolean = true\n    }\n\n    // Called every game tick (20 times per second).\n    // The cycle is a parameter that is incremented every tick, starting at 0.\n    override fun tick(context: TickContext) {\n        super.tick(context)\n        if (state != MessengerState.RUNNING) return\n\n        player.sendMessage("${entry.speakerDisplayName}: ${entry.text}".parsePlaceholders(player).asMini())\n\n        // When we want the dialogue to end, we can set the state to FINISHED.\n        state = MessengerState.FINISHED\n    }\n}'},event_entry:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:'@Entry("example_event", "An example event entry.", Colors.YELLOW, "material-symbols:bigtop-updates")\nclass ExampleEventEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n) : EventEntry'},event_entry_listener:{file:"src/main/kotlin/com/typewritermc/example/entries/trigger/ExampleEventEntry.kt",content:"// Must be scoped to be public\n@EntryListener(ExampleEventEntry::class)\nfun onEvent(event: SomeBukkitEvent, query: Query<ExampleEventEntry>) {\n    // Do something\n    val entries = query.find() // Find all the entries of this type, for more information see the Query section\n    // Do something with the entries, for example trigger them\n    entries triggerAllFor event.player\n}"}};var a=t(84996);function l(e){let n,{tag:t,json:l}=e;if(!l)throw Error("JSON not provided");if(null==(n=Object.keys(l).length>0?l[t]:r[t]))return(0,i.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t]});let{file:s,content:o}=n;if(null==s||null==o)return(0,i.jsxs)("div",{className:"text-red-500 dark:text-red-400 text-xs",children:["Code snippet not found: ",t," (",n,")"]});let c=s.split("/").pop();return(0,i.jsx)(a.A,{language:"kotlin",showLineNumbers:!0,title:c,children:o})}},76590:e=>{e.exports={}}}]);