export interface Education {
    level:string,
    institute:string,
    board:string,
    marks:string
    start_year:number,
    end_year:number,
    subject:string
}


export const educations:Education[]=[
    {
        level:"Bachelor",
        institute:"Amrit Campus",
        board:"Tribhuwan University",
        marks:"84 %",
        start_year:2022,
        end_year:2026,
        subject:"B.Sc.CSIT"
    },{
        level:"Intermediate",
        institute:"Hetauda School of Management",
        board:"NEB",
        marks:"3.64 GPA",
        start_year:2019,
        end_year:2021,
        subject:"Science"
    },{
        level:"S.E.E",
        institute:"Aadhunik Rastriya Secondary School",
        board:"NEB",
        marks:"3.75 GPA",
        start_year:2018,
        end_year:2020,
        subject:"S.E.E"
    }
]