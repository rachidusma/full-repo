const express = require('express');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');

const router = express.Router();

/**
 * PROFILE IMAGE STORING STARTS
 */
const s3 = new aws.S3({
	accessKeyId: 'AKIA22FJTO7TORSYE2WS',
	secretAccessKey: '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',
	Bucket: 'acreditpdf'
});

/**
 * Single Upload
 */
const profileUpload = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'acreditpdf',
		acl: 'public-read',
		key: function (req, file, cb) {
			//	cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
			cb(null, path.basename(file.originalname, path.extname(file.originalname)) + path.extname(file.originalname))
		}
	}),
	limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).single('file');

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType(file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif|pdf/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);
	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images and PDF Only!');
	}
}

/**
 * @route POST /api/profile/business-img-upload
 * @desc Upload post file
 * @access public
 */
router.post('/file-upload', (req, res) => {
	profileUpload(req, res, (error) => {
		console.log('requestOkokok', req.file);
		console.log('error', error);
		if (error) {
			console.log('errors', error);
			res.json({ error: error });
		} else {
			// If File not found
			if (req.file === undefined) {
				console.log('Error: No File Selected!');
				res.json('Error: No File Selected');
			} else {
				// If Success
				const fileName = req.file.key;
				const fileLocation = req.file.location;
				// Save the file name into database into profile model
				res.json({
					file: fileName,
					location: fileLocation
				});
			}
		}
	});
});

/**
 * BUSINESS GALLERY IMAGES
 * MULTIPLE FILE UPLOADS
 */
// Multiple File Uploads ( max 4 )
const uploadsBusinessGallery = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'orionnewbucket',
		acl: 'public-read',
		key: function (req, file, cb) {
			//		cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
			cb(null, path.basename(file.originalname, path.extname(file.originalname)) + path.extname(file.originalname))
		}
	}),
	limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).array('galleryImage', 4);
/**
 * @route POST /api/profile/multiple-file-upload
 * @desc Upload business Gallery images
 * @access public
 */
router.post('/multiple-file-upload', (req, res) => {
	uploadsBusinessGallery(req, res, (error) => {
		console.log('files', req.files);
		if (error) {
			console.log('errors', error);
			res.json({ error: error });
		} else {
			// If File not found
			if (req.files === undefined) {
				console.log('Error: No File Selected!');
				res.json('Error: No File Selected');
			} else {
				// If Success
				let fileArray = req.files,
					fileLocation;
				const galleryImgLocationArray = [];
				for (let i = 0; i < fileArray.length; i++) {
					fileLocation = fileArray[i].location;
					console.log('filenm', fileLocation);
					galleryImgLocationArray.push(fileLocation)
				}
				// Save the file name into database
				res.json({
					filesArray: fileArray,
					locationArray: galleryImgLocationArray
				});
			}
		}
	});
});

module.exports = router;