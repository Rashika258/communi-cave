import { useSocket } from "@/components/providers/socket-provider";
import React from "react";
import { Badge } from "./ui/badge";

const SocketIndicator = () => {
  console.log('props', useSocket)
  // const { isConnected } = useSocket();

  // // const props = useSocket?.();
 

  // if (!isConnected) {
  //   return (
  //     <Badge
  //       variant={"outline"}
  //       className="bg-yellow-600 text-white border-none"
  //     >
  //       Fallback: Polling every 1s
  //     </Badge>
  //   );
  // }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-none">
      Live: Real-time updates
    </Badge>
  );
};

export default SocketIndicator;
