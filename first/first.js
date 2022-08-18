let daysOfTheWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

let removeTheFirstDayOfTheWeek = () => {
    return daysOfTheWeek.shift();
}

let str =
    `Старший братец ${removeTheFirstDayOfTheWeek()} –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

${removeTheFirstDayOfTheWeek()} следует за братом
у него идей богато.

А потом ${removeTheFirstDayOfTheWeek()}-сестрица,
не пристало ей лениться.

Брат ${removeTheFirstDayOfTheWeek()} и так, и сяк,
он мечтательный чудак.

${removeTheFirstDayOfTheWeek()}-сестра сумела
побыстрей закончить дело.

Предпоследний брат ${removeTheFirstDayOfTheWeek()}
не выходит на работу.

В гости ходит ${removeTheFirstDayOfTheWeek()},
очень любит угощенье
`;

console.log(str);