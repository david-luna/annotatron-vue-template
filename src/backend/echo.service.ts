import { Command, Injectable } from "annotatron";

@Injectable()
export class EchoService {
  @Command("echo")
  respond(message: string): string {
    return `Echoing: ${message}`;
  }
}
