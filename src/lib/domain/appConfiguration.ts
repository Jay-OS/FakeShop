type AppConfigurationType = {
    apiRoot: string;
    layout: {
        pageSize: number;
    };
};

const appConfiguration: AppConfigurationType = {
    apiRoot: "https://fakestoreapi.com/",
    layout: {
        pageSize: 12,
    },
};

export default appConfiguration;
