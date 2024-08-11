export interface IMenu {
    id: number,
    title: string,
    to: string
}
export const NAV_ITEMS: IMenu[] = [
    {id:0, title:"Партнерам", to:"/partners"},
    {id:1, title:"Правила обмена", to:"/exchange-rules"},
    {id:2, title:"FAQ", to:"/faq"},
    {id:3, title:"Контакты", to:"/contacts"}
]
