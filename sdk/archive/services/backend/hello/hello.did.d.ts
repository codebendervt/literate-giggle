import type { Principal } from '@dfinity/principal';
export type Data = Data_2;
export interface Data_2 {
  'data' : string,
  'graph' : Array<string>,
  'last_update' : bigint,
}
export interface _SERVICE {
  'data_exist' : (arg_0: string) => Promise<boolean>,
  'get_all_data' : () => Promise<Array<Data_2>>,
  'get_data' : (arg_0: string) => Promise<Data_2>,
  'get_id' : () => Promise<string>,
  'greeting' : (arg_0: string) => Promise<string>,
  'leaving' : (arg_0: string) => Promise<string>,
  'remove_data' : (arg_0: string) => Promise<undefined>,
  'update_data' : (arg_0: string, arg_1: Data_2) => Promise<undefined>,
}
