import CommandExecutor from "./CommandExecutor";
import DirConfig from "./DirConfig";


// simple dependency injector for easy test
const instancesPool: { [key: string]: any } = {
    DirConfig: new DirConfig(),
    CommandExecutor: new CommandExecutor()
}

const lazyInstancesFactory: { [key: string]: () => any } = {}

const objectFactory: { [key: string]: () => any } = {}

export const get = <T>(name: string): T => {
    if (name in instancesPool) {
        return instancesPool[name];
    }
    if (!(name in lazyInstancesFactory)) {
        throw new Error('Instance not set');
    }
    const instance: T = lazyInstancesFactory[name]();
    instancesPool[name] = instance;
    return instance;
}

export const instantiate = <T>(name: string): T => {
    if (!(name in objectFactory)) {
        throw new Error('Object factory is not set');
    }
    return objectFactory[name]();
}

export const set = <T>(name: string, instance: any): T => {
    instancesPool[name] = instance;
    return instance;
}

export const setLazy = (name: string, instance: () => any): void => {
    lazyInstancesFactory[name] = instance;
}

export const setFactory = <T>(name: string, instance: () => any): void => {
    objectFactory[name] = instance;
}

export const remove = (name: string): void => {
    delete instancesPool[name];
}

export const removeLazy = (name: string): void => {
    delete lazyInstancesFactory[name];
}

