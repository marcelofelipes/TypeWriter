package me.gabber235.typewriter.adapters.modifiers

import me.gabber235.typewriter.Typewriter.Companion.plugin
import me.gabber235.typewriter.adapters.*
import me.gabber235.typewriter.adapters.FieldModifier.StaticModifier


@Target(AnnotationTarget.FIELD, AnnotationTarget.PROPERTY)
annotation class MultiLine

object MultiLineModifierComputer : StaticModifierComputer<MultiLine> {
	override val annotationClass: Class<MultiLine> = MultiLine::class.java

	override fun computeModifier(annotation: MultiLine, info: FieldInfo): FieldModifier? {
		if (info !is PrimitiveField) {
			plugin.logger.warning("MultiLine annotation can only be used on strings")
			return null
		}
		if (info.type != PrimitiveFieldType.STRING) {
			plugin.logger.warning("MultiLine annotation can only be used on strings")
			return null
		}

		return StaticModifier("multiline")
	}
}