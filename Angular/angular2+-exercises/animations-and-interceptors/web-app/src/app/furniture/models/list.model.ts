export class ItemModel {
  constructor(
    private id: string,
    private make: string,
    private model: string,
    private year: number,
    private description: string,
    private price: number,
    private image: string
  ) { }
}