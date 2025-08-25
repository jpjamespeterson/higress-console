export interface TlsCertificate {
  name: string;
  domains: string;
  validityStart: string;
  validityEnd: string;
  cert: string;
  key: string;
  version: string;
}

export interface TlsCertificateResponse extends Array<TlsCertificate> {}
