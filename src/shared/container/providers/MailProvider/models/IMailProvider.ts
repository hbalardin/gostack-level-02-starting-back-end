export default interface IMailProvider {
  sendMail(to: string, boding: string): Promise<void>;
}
