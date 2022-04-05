export const idlFactory = ({ IDL }) => {
  const Data_2 = IDL.Record({
    'data' : IDL.Text,
    'graph' : IDL.Vec(IDL.Text),
    'last_update' : IDL.Int64,
  });
  return IDL.Service({
    'data_exist' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'get_all_data' : IDL.Func([], [IDL.Vec(Data_2)], ['query']),
    'get_data' : IDL.Func([IDL.Text], [Data_2], ['query']),
    'get_id' : IDL.Func([], [IDL.Text], ['query']),
    'greeting' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'leaving' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'remove_data' : IDL.Func([IDL.Text], [], []),
    'update_data' : IDL.Func([IDL.Text, Data_2], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
