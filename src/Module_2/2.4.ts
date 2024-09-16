{
    type Developer<T> = {
        name: string,
        address: string,
        skills: T
    }

    interface FrontEnd {
        html: boolean,
        css: boolean,
        js: boolean,
        react: boolean,
        vue: boolean,
        angular: boolean,
        svelte: boolean,
        next: boolean,
    }
    interface BackEnd extends FrontEnd { 
        php: boolean,
        python: boolean,
        java: boolean,
        ruby: boolean,
        go: boolean,
    }
    interface FullStack extends BackEnd {
        node: boolean,
        express: boolean,
        mongo: boolean,
        mysql: boolean,
        graphql: boolean,
        aws: boolean,
        azure: boolean,
        google: boolean
    }

    const frontEnd: Developer<FrontEnd> = {
        name: "Rimon",
        address: "Dhaka",
        skills: {
            html: true,
            css: true,
            js: true,
            react: true,
            vue: true,
            angular: true,
            svelte: true,
            next: true
        }
    }
    const backEnd: Developer<BackEnd> = {
      name: "Hossain",
      address: "Dhaka",
      skills: {
        html: true,
        css: true,
        js: true,
        react: true,
        vue: true,
        angular: true,
        svelte: true,
        next: true,
        php: true,
        python: true,
        java: true,
        ruby: true,
        go: true
      },
    };
    const fullStack: Developer<FullStack> = {
      name: "Rafsan",
      address: "Dhaka",
      skills: {
        html: true,
        css: true,
        js: true,
        react: true,
        vue: true,
        angular: true,
        svelte: true,
        next: true,
        php: true,
        python: true,
        java: true,
        ruby: true,
          go: true,
          node: true,
          express: true,
          mongo: true,
          mysql: true,
          graphql: true,
          aws: true,
          azure: true,
          google: true
      },
    };
}