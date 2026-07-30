export type VeteranResource={name:string;desc:string;phone:string;email:string;website:string;address:string;note:string};
export type VeteranResourceCategory={title:string;note?:string;groups:[string,VeteranResource[]][]};
