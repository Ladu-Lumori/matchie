import React from "react";
import {
    fetchCurrentUserLikeIds,
    fetchLikedMembers,
} from "../actions/likeActions";
import ListsTab from "./ListsTab";
import Link from "next/link";

export default async function ListsPage({
    searchParams,
}: {
    searchParams: { type: string };
}) {
    const likeIds = await fetchCurrentUserLikeIds();
    const members = await fetchLikedMembers(
        searchParams.type
    );
    return (
        <div>
            <ListsTab
                members={members}
                likeIds={likeIds}
            />
            <Link href="/">Go HOME</Link>
        </div>)
}