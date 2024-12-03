export type AdDescription = {
    imgSrc: string;
    adStatus: AdStatus;
    currency: '€';
    title: string;
    description?: string;
    price: string;
    referral?: string;
}

type AdStatus = 'accepted' | 'rejected' | 'pending';
