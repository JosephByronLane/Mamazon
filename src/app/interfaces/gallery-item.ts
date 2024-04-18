export interface IGalleryItem {
    id:number,
    title: string,
    imgUrl:string,
    price:number,
    maker:string,
    metadata: {[key: string]: string};
    description:string
    type:string
    link:string
    stock:number
}
