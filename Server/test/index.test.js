const app = require('../src/app');
const session = require('supertest');
const request = session(app);


describe("test de RUTAS", () =>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async ()=>{
            // await request.get("/rickandmorty/character/1").expect(200)
            const response = await request.get("/rickandmorty/character/1")
            expect(response.statusCode).toBe(200)
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender','status', 'origin' e 'image'",
         async () => {
            const response = await request.get("/rickandmorty/character/1");
            // expect(response.body).toHaveProperty('id','name', 'species', 'gender','status', 'origen', 'image' )
            // for(const prop in response.body){
            //     expect(response.body).toHaveProperty(prop)
            // }
            const props =['id', 'name', 'species', 'gender','status', 'origin', 'image']
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            })
        });
        it("Si hay un error responde con status: 500", async () => {
            const response = await request.get("/rickandmorty/character/3568t");
            expect(response.statusCode).toBe(500)
        })
    })

    describe("GET /rickandmorty/login", () =>{
        it("Responde con un objeto con la propiedad access en true si la información del usuario es valida", async () => {
            const response = await request.get("/rickandmorty/login?email=sppoveda90@gmail.com&password=Thoma1622");
            const access = { access: true };
            expect(response.body).toEqual(access);
        });
        it("Responde con un objeto con la propiedad access en false si la información del usuario no es valida", async ()=>{
            const response = await request.get("/rickandmorty/login?email=sppoveda90@gmail.com&password=Thoma16yy");
            const access = { access: false }
            expect(response.body).toEqual(access);
        })
    })
})