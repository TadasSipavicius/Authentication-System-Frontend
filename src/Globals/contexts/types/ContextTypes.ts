export type AuthSelectedCardType = {
    selectedCard: string;
    setSelectedCard: (cardTitle: string) => void;
};

export type Auth = {
    authenticated: { isAuthenticated: boolean, user: any };
    setAuthenticated: (auth: { isAuthenticated: boolean, user: any }) => void;
}
