import multer from 'multer'

export const upload: multer = multer({dest: './assets/uploads'})
