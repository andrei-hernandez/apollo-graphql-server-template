import { IResolvers } from "graphql-tools";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
      Query: {
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args: any): string {
            return `Hello ${args.name}!!`;
        },
        helloToApolloGraphQLTemplate(): string {
            return 'Hello to Apollo GraphQL Template!!';
        }
    }

};

export default resolvers;