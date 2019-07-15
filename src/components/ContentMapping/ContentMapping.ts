<<<<<<< HEAD
import React from 'react'
import { PlainText } from '../ContentWidgets/PlainText/PlainText'
import { PlainTextEditor } from '../ContentWidgets/PlainText/PlainTextEditor'
import { Stub, StubEditor } from '../ContentWidgets/_Stub/Stub'
import { ContentSingularData } from '../_data/ContentSingularData'
import { ExampleImage } from '../ContentWidgets/ExampleImage/ExampleImage'
import { ExampleImageEditor } from '../ContentWidgets/ExampleImage/ExampleImageEditor'
import { ImagesInRow } from '../ContentWidgets/ImagesInRow/ImagesInRow'
import { ImagesInRowEditor } from '../ContentWidgets/ImagesInRow/ImagesInRowEditor'
=======
import React from "react"
import { PlainText } from "../ContentWidgets/PlainText/PlainText"
import { PlainTextEditor } from "../ContentWidgets/PlainText/PlainTextEditor"
import { Stub, StubEditor } from "../ContentWidgets/_Stub/Stub"
import { ContentSingularData } from "../_data/ContentSingularData"
import { ExampleImage } from "../ContentWidgets/ExampleImage/ExampleImage"
import { ExampleImageEditor } from "../ContentWidgets/ExampleImage/ExampleImageEditor"
import { ImagesInRow } from "../ContentWidgets/ImagesInRow/ImagesInRow"
import { ImagesInRowEditor } from "../ContentWidgets/ImagesInRow/ImagesInRowEditor"
>>>>>>> 5ca58bd3f0204017f00857856785198d9e9b3f82

export type WidgetEditorProps = {
	originalContent: ContentSingularData
	editedContent: ContentSingularData
	setEditedContentOnChange: (keyToChange: string, valueToChange: any) => void
}

type ContentMappingType = {
	[idx: string]: {
		widget: React.FC<ContentSingularData>
		editor: React.FC<WidgetEditorProps>
	}
}

export enum WidgetTypes {
<<<<<<< HEAD
    PLAIN_TEXT = "PLAIN_TEXT",
    STUB = "STUB",
    EXAMPLE_IMAGE = "EXAMPLE_IMAGE",
    IMAGES_IN_ROW = "IMAGES_IN_ROW"
}

export const ContentMapping: ContentMappingType = {
    PLAIN_TEXT: {
        widget: PlainText,
        editor: PlainTextEditor
    },
    STUB: {
        widget: Stub,
        editor: StubEditor
    },
    EXAMPLE_IMAGE: {
        widget: ExampleImage,
        editor: ExampleImageEditor
    },
    IMAGES_IN_ROW: {
        widget: ImagesInRow,
        editor: ImagesInRowEditor
    }
=======
	PLAIN_TEXT = "PLAIN_TEXT",
	STUB = "STUB",
	EXAMPLE_IMAGE = "EXAMPLE_IMAGE",
	IMAGES_IN_ROW = "IMAGES_IN_ROW"
}

export const ContentMapping: ContentMappingType = {
	PLAIN_TEXT: {
		widget: PlainText,
		editor: PlainTextEditor
	},
	STUB: {
		widget: Stub,
		editor: StubEditor
	},
	EXAMPLE_IMAGE: {
		widget: ExampleImage,
		editor: ExampleImageEditor
	},
	IMAGES_IN_ROW: {
		widget: ImagesInRow,
		editor: ImagesInRowEditor
	}
>>>>>>> 5ca58bd3f0204017f00857856785198d9e9b3f82
}
