import LoadingSkeleton from '@utils/LoadingSkeleton'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingSkeleton /> || <p>Loading</p>

  }