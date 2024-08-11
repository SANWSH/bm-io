export interface IExchangers {
    title?: string;
    id: number;
    titleItems?: {
      is: string;
      className: string;
      text?: string;
      icon?: boolean;
    }[]|null;
  }

  export interface ICurrency {
    title: string,
    id: string|number
  }

  export const CURRENCY: ICurrency[] = [
    {title: 'Все', id:'_all' },
    {title: 'Крипто / Стейбл', id:'COIN' },
    {title: 'Платежные системы', id:'РУБ' },
  ]
  
  export const EXCHANGERS: IExchangers[] = [
    {
      title: 'Отдаете',
      id: 2,
      titleItems: [{ is: "button", className: "changePosition", icon: true}],
    },
    {
      title: 'Получаете',
      id: 3,
      titleItems: [
        { is: "button", className: "button typeTab", text: 'Резервы'},
        { is: "button", className: "button typeTab", text: 'Курс'},
      ],
    },
  ];