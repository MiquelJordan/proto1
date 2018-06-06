export class Process {
    constructor(
        public processId,
        public step,

    ) { }
}

export class Step {
    constructor(
        public photo: string,
        public text: string,
        public background: string,
    ) { }
}
export class StepTwo {
    constructor(
        public photo: string,
        public text: string,
        public background: string,
    ) { }
}