# Superhero Catalog

This project is a web application for managing a database of superheroes. Users can create, view, update, and delete superheroes. Each superhero has associated images, superpowers, and a catchphrase.

---

## Features

- Add new superheroes with:
  - Nickname
  - Real name
  - Origin description
  - Superpowers
  - Catchphrase
  - Exactly 4 images
- Edit existing superheroes
- Delete superheroes
- Client-side validation for all fields
- Responsive design


---

## Technologies Used

- **Frontend**: React 18, Next.js, TypeScript, TailwindCSS
- **State management & Forms**: Mantine `useForm`
- **File Upload**: Mantine Dropzone
- **Backend API**: Node.js + Express.js (assumed)
- **Database**: MongoDB (assumed)
- **Services**:
  - `SuperheroService` for CRUD operations
  - `ImagesService` for uploading images
-   This project uses **Cloudinary** to store superhero images.


