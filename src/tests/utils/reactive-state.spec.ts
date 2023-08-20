import { count, tap } from "rxjs";
import { ReactiveState } from "../../micromouse_challenger/utils/reactive-state";

describe('Rxjs', () => {

    describe("ReactiveState with primitive", () => {

        let state: ReactiveState<number>

        beforeEach(() => {
            state = new ReactiveState<number>(1)
        });

        it("listen() default value", (done) => {
            state.listen().subscribe(s => {
                expect(s).toBe(1)
                done()
            })
        })

        it("update() must update to 7", () => {
            state.update(7)
            const s = state.snapshot()
            expect(s).toBe(7)
        })

        it("reduce() must increment to 10", () => {
            state.reduce(prev => prev + 10)
            const s = state.snapshot()
            expect(s).toBe(11)
        })

        it("listen() must receive only 3 updated values", (done) => {

            state.listen().pipe(
                count()
            ).subscribe({
                next: x => {
                    expect(x).toBe(3)
                },
                complete: () => done()
            })
            state.update(10)
            state.update(10)
            state.update(10)
            state.update(20)
            state.update(20)
            state.update(20)
            state.complete()

        })

        it("listen() must receive only 2 updated date values", (done) => {

            const initialDate = createDate(2023, 1, 1)
            const newDate = createDate(2023, 1, 2)
            console.log("dates", initialDate, newDate)

            const dateState = new ReactiveState<Date>(initialDate)
            dateState.listen().pipe(
                count()
            ).subscribe({
                next: x => {
                    expect(x).toBe(2)
                },
                complete: () => done()
            })
            dateState.update(initialDate)
            dateState.update(initialDate)
            dateState.update(newDate)
            dateState.update(newDate)
            dateState.complete()

        })

    })

    describe("ReactiveState with Object", () => {

        interface State {
            name: string,
            age: number,
            datebirth?: Date
        }
        let state: ReactiveState<State>

        beforeEach(() => {
            state = new ReactiveState<{ name: string, age: number, datebirth?: Date }>({
                name: "",
                age: 0,
            })
        });

        it("listen() default value", (done) => {
            state.listen().subscribe(s => {
                expect(s.name).toBe("")
                expect(s.age).toBe(0)
                expect(s.datebirth).toBeUndefined()
                done()
            })
        })

        it("update() must update name prop", () => {
            const name = "juan"
            const age = 20
            const datebirth = new Date()
            state.update({
                name,
                age,
                datebirth
            })
            const s = state.snapshot()
            expect(s.name).toBe(name)
            expect(s.age).toBe(age)
            expect(s.datebirth).toBeDefined()

        })

        it("reduce() must increment age 20", () => {
            state.reduce(prev => ({
                ...prev,
                age: prev.age + 20
            }))
            const s = state.snapshot()
            expect(s.name).toBe("")
            expect(s.age).toBe(20)
            expect(s.datebirth).toBeUndefined()
        })

        it("listen() must receive only 3 updated values", (done) => {

            state.listen().pipe(
                count()
            ).subscribe({
                next: x => {
                    expect(x).toBe(3)
                },
                complete: () => done()
            })

            state.update({
                name: "jack",
                age: 40
            })
            state.update({
                name: "jack",
                age: 40
            })
            state.update({
                name: "jack bauer",
                age: 40
            })
            state.complete()


        })

        it("listen() must receive only 3 updated dates", (done) => {

            const initialDate = createDate(2023, 1, 1)
            const newDate = createDate(2023, 1, 2)
            console.log("dates", initialDate, newDate)
            state.listen().pipe(
                count()
            ).subscribe({
                next: x => {
                    expect(x).toBe(3)
                },
                complete: () => done()
            })

            state.update({
                name: "jack",
                age: 40,
                datebirth: initialDate
            })
            state.update({
                name: "jack",
                age: 40,
                datebirth: initialDate
            })
            state.update({
                name: "jack",
                age: 40,
                datebirth: newDate
            })
            state.complete()


        })

        it("listenTo() must receive only 3 updated dates", (done) => {

            const initialDate = createDate(2023, 1, 1)
            const newDate = createDate(2023, 1, 2)
            console.log("dates", initialDate, newDate)
          
            state.listenTo(state => state.datebirth).pipe(
                tap(x => console.log('data', x)),
                count()
            ).subscribe({
                next: x => {
                    expect(x).toBe(3)
                },
                complete: () => done()
            })

            state.update({
                name: "jack",
                age: 40,
                datebirth: initialDate
            })
            state.update({
                name: "jack",
                age: 40,
                datebirth: initialDate
            })
            state.update({
                name: "jack",
                age: 40,
                datebirth: newDate
            })
            state.update({
                name: "jack",
                age: 40,
                datebirth: newDate
            })
            state.complete()


        })



    })


})

function createDate(año: number, mes: number, dia: number) {
    // Restar 1 al mes para ajustar al formato de JavaScript (0 = enero, 1 = febrero, ...)
    const fecha = new Date(año, mes - 1, dia);
    return fecha;
}
