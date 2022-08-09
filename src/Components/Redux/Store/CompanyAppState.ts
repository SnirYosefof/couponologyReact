import { CompanyModel } from "../../Models/UserModel";

export class CompanysAppState {
    public companys: CompanyModel[] = [];
}

export enum CompanysActionType {
    CompanysDownloaded = "CompanysDownloaded",
    CompanyAdded = "CompanyAdded",
    CompanyUpdated = "CompanyUpdated",
    CompanyDeleted = "CompanyDeleted"
}

export interface CompanyAction {
    type: CompanysActionType;
    payload?: any;
}

export function companysDownloadedAction(companys: CompanyModel[]): CompanyAction {
    return { type: CompanysActionType.CompanysDownloaded, payload: companys };
}

export function companyssAddedAction(company: CompanyModel): CompanyAction {
    return { type: CompanysActionType.CompanyAdded, payload: company };
}

export function companyssUpdatedAction(company: CompanyModel): CompanyAction {
    return { type: CompanysActionType.CompanyUpdated, payload: company };
}

export function companyssDeletedAction(id:number): CompanyAction {
    return { type: CompanysActionType.CompanyDeleted, payload: id };
}

export function companysReducer(currentState: CompanysAppState = new CompanysAppState(),action:CompanyAction): CompanysAppState{


    const newState = {...currentState} //Spread Operator
    switch(action.type){
        case CompanysActionType.CompanysDownloaded:
            newState.companys = action.payload;
            break;
        case CompanysActionType.CompanyAdded:
            newState.companys.push(action.payload);
            break;
        case CompanysActionType.CompanyUpdated:
            //  const idx = newState.companys.filter(c => c.id === action.payload.id);
            //  newState.companys[idx]=action.payload;    
            break
            case CompanysActionType.CompanyDeleted:
                newState.companys = newState.companys.filter(c=>c.id !== action.payload);
                break
    }
    return newState;
    
}