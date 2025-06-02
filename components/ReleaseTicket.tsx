"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";

const ReleaseTicket = ({
  eventId,
  waitingListId,
}: {
  eventId: Id<"events">;
  waitingListId: Id<"waitingList">;
}) => {
  const releaseTicket = useMutation(api.waitingList.releaseTicket);
  const [isReleasing, setIsReleasing] = useState(false);

  return <div>ReleaseTicket</div>;
};

export default ReleaseTicket;
