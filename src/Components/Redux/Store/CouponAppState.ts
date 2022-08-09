import { CompanyModel, CouponModel, CustomerModel } from "../../Models/UserModel";

export class CouponAppState {
    public coupons: CouponModel[] = [];
}

export enum  CouponActionType {
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated", 
    CouponDeleted = "CouponDeleted",
    CouponClear= "CouponClear",
}

export interface CouponAction {
    type: CouponActionType;
    payload?: any;
}

export function couponsDownloadedAction(coupon: CouponModel[]): CouponAction {
    return { type: CouponActionType.CouponsDownloaded, payload: coupon };
}

export function couponAddedAction(coupon: CouponModel): CouponAction {
    return { type: CouponActionType.CouponAdded, payload: coupon };
}

export function couponUpdatedAction(coupon: CouponModel): CouponAction {
    return { type: CouponActionType.CouponUpdated, payload: coupon };
}

export function couponDeletedActoin(id:number): CouponAction {
    return { type: CouponActionType.CouponDeleted, payload: id };
}
export function CouponClear(): CouponAction {
    return { type: CouponActionType.CouponDeleted };
}

export function couponsReducer(currentState: CouponAppState = new CouponAppState(),action:CouponAction): CouponAppState{


    const newState = {...currentState} //Spread Operator
    switch(action.type){
        case CouponActionType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
        case CouponActionType.CouponAdded:
            newState.coupons.push(action.payload);
            break;
        case CouponActionType.CouponUpdated:
            const idx = newState.coupons.findIndex(c => c.id === action.payload.id);
            newState.coupons[idx] = action.payload;
            break
            case CouponActionType.CouponDeleted:
                newState.coupons = newState.coupons.filter(c=>c.id !== action.payload);
                break
    }
    return newState;
    
}