import { usePollIfInView } from "@/lib/usePollIfInView"
import { usePostLikes } from "@/lib/usePostLikes"
import { usePostViews } from "@/lib/usePostViews"
import React, { useEffect } from "react"

export const PostMetrics = ({ slug }: { slug: string }) => {
  const interval = 5000
  const { shouldPoll, intersectionRef } = usePollIfInView(interval)

  const {
    views,
    isLoading: viewsIsLoading,
    isError: viewsIsError,
    increment: incrementViews,
  } = usePostViews(slug, {
    // Avoid fetching view count we *know* is stale since increment() mutation
    // returns view count
    revalidateOnMount: false,
    // Only poll when in view
    refreshInterval: shouldPoll ? interval : 0,
    // Override `usePostViews` default dedupingInterval for the polling usecase
    // (refresh interval can never be faster than deduping interval)
    dedupingInterval: interval,
  })

  const {
    likes,
    isLoading: likesIsLoading,
    isError: likesIsError,
  } = usePostLikes(slug, {
    // only poll when in view
    refreshInterval: shouldPoll ? interval : 0,
  })

  useEffect(() => {
    incrementViews()
    console.log("abc 11111111");
    
  }, [])

  return (
    <>
      <div ref={intersectionRef}>
        {viewsIsError || viewsIsLoading ? (
          <span>Loading....</span>
        ) : (
          <span>{views}</span>
        )}{" "}
        views
      </div>

      <div className="text-rose-100/30">&middot;</div>

      <div>
        {likesIsError || likesIsLoading ? (
          <span>Loading....</span>
        ) : (
          <span>{likes}</span>
        )}{" "}
        likes
      </div>
    </>
  )
}
