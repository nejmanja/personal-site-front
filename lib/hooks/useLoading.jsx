import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useLoading(start, complete) {
    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", complete);
        return () => {
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", complete);
        };
    }, []);
}
