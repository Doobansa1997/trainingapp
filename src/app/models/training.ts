export interface Training {
    id?: string;
    name: string;
    userId: string;
    trainingDays: TrainingDay[];
}

export interface TrainingDay{
    order: number;
    isActive: boolean;
    exercises: Exercise[];
}

export interface Exercise{
    order: number;
    name: string;
    series: number;
    repetitions: number;
    weight: number;
    rest?: number;
    note?: string;
}
