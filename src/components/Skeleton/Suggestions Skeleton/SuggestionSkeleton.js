import React from "react";
import styles from "./SuggestionSkeleton.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SuggestionSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => {
      return (
        <>
          <SkeletonTheme baseColor="#e6e4e4dc" highlightColor="grey">
            <div className={styles.card} key={index}>
              <div className={styles.cardBottomTop}>
                <Skeleton
                  count={1}
                  style={{ marginBottom: "1rem", width: "100%" }}
                />
              </div>
            </div>
          </SkeletonTheme>
        </>
      );
    });
};

export default SuggestionSkeleton;
