import qs from "query-string";
import {
  QueryFunction,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";

import { useSocket } from "@/components/providers/socket-provider";

interface ChatQueryProps {
  queryKey: string;
  apiUrl: string;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
}

export const useChatQuery = ({
  queryKey,
  apiUrl,
  paramKey,
  paramValue,
}: ChatQueryProps) => {
  const { isConnected } = useSocket();

  const fetchMessages: QueryFunction<any, QueryKey, unknown> = async ({
    pageParam = undefined,
  }) => {
    const queryParams: Record<string, string | undefined> = {
      cursor: pageParam as string | undefined, // Assuming cursor is a string; adjust the type accordingly
      [paramKey]: paramValue,
    };

    const url = qs.stringifyUrl(
      {
        url: apiUrl,
        query: queryParams,
      },
      { skipNull: true }
    );

    const res = await fetch(url);
    return res.json();
  };
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<any, Error>({
      queryKey: [queryKey],
      queryFn: fetchMessages,
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      refetchInterval: isConnected ? false : 1000,
      initialData: undefined,
      initialPageParam: undefined,
    });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};
