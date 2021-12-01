/**
* function for clone date
*
* @param {Date} date install date
* @returns {object}
*/
export function cloneDate(date: Date): object;
/**
* function for adding days
*
* @param {Date} date current date
* @param {number} days quantity adding days
* @returns {Date}
*/
export function addDays(date: Date, days: number): Date;
export const database: {
    id: string;
    title: string;
    details: string;
    photos: string[];
    coordinates: number[];
    bookedDates: any[];
    price: number;
}[];
export class FlatRentSdk {
    /**
* write database data if not exist
*
* @param {object[]|null} database
*/
    constructor(database: object[] | null);
    database: any[];
    /**
     * Get flat by ID.
     *
     * @param {string} id Flat ID.
     * @returns {Promise<Object|null>} Flat.
     */
    get(id: string): Promise<any | null>;
    /**
     * Search for flats.
     *
     * @param {Object} parameters Search parameters
     * @param {string}parameters.city City name
     * @param {string}parameters.supplier Supplier name
     * @param {Date} parameters.checkInDate Check-in date
     * @param {Date} parameters.checkOutDate Check-out date
     * @param {number} [parameters.priceLimit] Max price for a night
     * @returns {Object[]} List of suitable flats.
     */
    search(parameters: {
        city: string;
        supplier: string;
        checkInDate: Date;
        checkOutDate: Date;
        priceLimit?: number;
    }): any[];
    /**
     * Book flat.
     *
     * @param {number} flatId Flat ID
     * @param {Date} checkInDate Check-in date
     * @param {Date} checkOutDate Check-out date
     * @returns {number}
     */
    book(flatId: number, checkInDate: Date, checkOutDate: Date): number;
    /**
 * Inserting correct Dates
 *
 * @param {Date} checkInDate Check-in date
 * @param {Date} checkOutDate Check-out date
 * @returns {Date[]}
 */
    _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): Date[];
    /**
* Reset Time
*
* @param {Date} date reset time
* @returns {Date}
*/
    _resetTime(date: Date): Date;
    /**
 * Calculate difference between start/end Dates
 *
 * @param {Date} startDate start calculating date
 * @param {Date} endDate finish calculating date
 * @returns {number}
 */
    _calculateDifferenceInDays(startDate: Date, endDate: Date): number;
    /**
* Generate date range for search & booking
*
* @param {Date} from generate calculating date start
* @param {Date} to generate calculating date finish
* @returns {Date[]}
*/
    _generateDateRange(from: Date, to: Date): Date[];
    /**
* Generate transaction id in booking
*
* @returns {number}
*/
    _generateTransactionId: () => number;
    /**
* check availability selected flat for selected dates
*
* @param {object[]} flat Flat
* @param {Date[]} dateRange  select data range
* @returns {boolean}
*/
    _areAllDatesAvailable(flat: object[], dateRange: Date[]): boolean;
    /**
* format Flat booking/searching parameters
*
* @param {object[]} flat Flat
* @param {number} nightNumber  quantity selected nights
* @returns {object[]}
*/
    _formatFlatObject(flat: object[], nightNumber: number): object[];
    /**
* read database data from localstorage
*
* @returns {object[]}
*/
    _readDatabase(): object[];
    /**
* write database data to localstorage
*
* @param {object[]} database our database
* @returns {object[]}
*/
    _writeDatabase(database: object[]): object[];
    /**
* syncing database data
* not applying yet in our project
*
* @param {object[]} database our database
*/
    _syncDatabase(database: object[]): void;
}
