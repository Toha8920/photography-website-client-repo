import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Toha's photography`;
    }, [title])
}

export default useTitle;