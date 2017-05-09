import { Context, Callback } from 'aws-lambda';


export const hello = (event: any, context: Context, cb: Callback) => {
  return cb(null,
    { message: 'Typescript handler works!', event }
  );
}
