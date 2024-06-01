type AppConfigurationType = {
    api: {
        apiRoot: string;
        timeoutMS: number;
    };
    layout: {
        pageSize: number;
    };
};

const appConfiguration: AppConfigurationType = {
    api: { 
        apiRoot: "https://fakestoreapi.com/",
        timeoutMS: 1000,
    },
    layout: {
        pageSize: 12,
    },
};

export default appConfiguration;
