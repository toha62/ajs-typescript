import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    deleteById(id: number): void {
        const index = this.items.findIndex((product) => product.id === id);
        
        this._items.splice(index, 1);
    }

    getTotalCost(): number {
        return this.items.reduce((sum, product) => sum + product.price, 0);
    }

    getTotalCostWithDiscount(discount: number): number {
        return this.items.reduce((sum, product) => sum + product.price, 0) * (1 - discount / 100);
    }
}