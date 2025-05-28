**Prerequisites**
- Node.js (v18 or higher)
- npm (latest version)
- Docker
- Turborepo
------------

### Setting up your Application


1. Clone the repository
```bash
git clone
```

2. Fetch Updates
```bash
git fetch
```

3. Switch to your Branch
```bash
git checkout <branch name>
```
or to make a new branch
```bash
git checkout -b <new branch name>
```

4. Install Dependensies
```bash
npm i
```
------------
### For BACKEND Developement 
5. Make a file named `.env` in 'apps/api' folder

6. Start Supabase (make sure your docker is open)
```bash
cd apps/api
supabase start
```

7. Copy the "DATABASE_URL" to the `.env` file

8. Update the Database
```bash
npx prisma migrate reset
npx prisma migrate dev -n init
npx prisma generate
```

9. Populate the database
```bash
npm run db:seed
```
------------
### Running the Application (if you just turned on your pc)
1. Pull from main
```bash
git pull origin main
```

2. Install Dependensies
```bash
npm i
```

3. Start Supabase (make sure your docker is open)
```bash
cd apps/api
supabase start
```

4. Run NextJS and NestJS
```bash
cd ../..
turbo run dev
```






