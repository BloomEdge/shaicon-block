/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, Modal, Placeholder } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { IconUpload } from '@tabler/icons-react';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const [isOpen, setOpen] = useState(false);
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);
	return (
		<>
			<div {...useBlockProps()}>
				<Placeholder
					icon={<IconUpload stroke={2} />}
					instructions="Choose Icon or Drag images, upload new ones or select files from your library."
					label="BloomEdge Icon Library"
				>
					<div>
						<Button
							variant="primary"
							onClick={openModal}
							style={{ gap: '10px' }}
						>
							Icon Library
							<IconUpload stroke={2} />
						</Button>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) =>
									console.log('selected', media)
								}
								allowedTypes={['image/svg', 'image']}
								value={''}
								render={({ open }) => (
									<Button onClick={open}>Insert Custom Icon</Button>
								)}
							/>
						</MediaUploadCheck>
					</div>
				</Placeholder>

			</div>

			{isOpen && (
				<Modal title="BloomEdge Icon Library" onRequestClose={closeModal}>
					<Button variant="secondary" onClick={closeModal}>
						My custom close button
					</Button>
				</Modal>
			)}
		</>
	);
}
