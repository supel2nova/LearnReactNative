import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";

export const getAllCoins = async () => {
    const response = await fetch('https://develop-da-mock-server-h2brk4xmka-as.a.run.app/api/v1/da/coin-list?page=1&limit=10');
    const data = await response.json();
    return data
}


export const getCoinById = async (id: string) => {
    const response = await fetch(`https://develop-da-mock-server-h2brk4xmka-as.a.run.app/api/v1/da/coin/${id}`);
    const data = await response.json();
    return data
}