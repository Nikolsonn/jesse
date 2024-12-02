export type adsDescription = {
    imgSrc: string;
    adStatus: adStatus;
    currency: '€';
    title: string;
    description?: string;
    price: string;
    referral?: string;
}

type adStatus = 'accepted'|'rejected'|'pending';
