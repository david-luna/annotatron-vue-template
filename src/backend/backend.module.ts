import { ElectronModule } from "annotatron";
import { EchoService } from "./echo.service";

@ElectronModule({
  imports: [],
  providers: [EchoService],
})
export class BackendModule {}
