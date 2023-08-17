import React, { FunctionComponent } from 'react'

interface Props {
  title: string
  boldText?: string[]
  excludePunctuation?: boolean
}

const StyleKeywords: FunctionComponent<Props> = ({ title, boldText, excludePunctuation }) => {
  const textItem = title.replace(/\u200B/g, '')
  const styledTitle = textItem.split(' ')?.map((item) => {
    const isKeywordMatch = boldText?.includes(item)
    // Exclude punctuation
    if (excludePunctuation) {
      const regex = /[!"`#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/
      const hasPunctuation = regex.test(item)
      const removedPunctuation = hasPunctuation ? item.substring(0, item.length - 1) : item
      const isKeywordBold = boldText?.includes(removedPunctuation)
      const formatKeyword =
        isKeywordBold && hasPunctuation ? (
          <>
            <strong>{removedPunctuation}</strong>
            {`${item.substring(item.length - 1)} `}
          </>
        ) : (
          <strong>{item} </strong>
        )

      return isKeywordBold ? formatKeyword : `${item} `
    }
    return isKeywordMatch ? <strong>{item} </strong> : `${item} `
  })

  const lastWordInTitle = styledTitle[styledTitle.length - 1]
  if (typeof lastWordInTitle === 'string') styledTitle[styledTitle.length - 1] = lastWordInTitle.trim()

  return <>{styledTitle}</>
}

export default StyleKeywords
