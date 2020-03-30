import { Mongo } from "meteor/mongo";

export const CounterCollection = new Mongo.Collection("counters");
