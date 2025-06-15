import { Action } from "./actions";
import { IARecommendation } from "./ia-recommendation";
import { Product } from "./product";

export interface Client {
    id: number;
    name: string;
    products: Product[];
    profileTags: string[];
    capturedPhrases: string[];
    actions: Action[];
    iaRecommendation: IARecommendation;
  }