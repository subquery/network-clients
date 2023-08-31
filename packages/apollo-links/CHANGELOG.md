# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.2] - 2023-08-31

- Increase default max retry to `8`
- Fix issue for filter out unavailable indexers
- Downgrade all the log level to `debug`

## [1.0.0] - 2023-08-25

Breaking change for `dictHttpLink` and `deploymentHttpLink`, use `const { link } = ...` for get the link.

## [0.5.7] - 2023-08-04

## [0.5.5] - 2023-07-21

## [0.5.3] - 2023-07-13

## [0.5.2] - 2023-06-19

### Changed

- upgrade @metamask/eth-sig-util to ^5.1.0

## [0.5.1] - 2023-06-15

### Changed

- Improve retry logic & logs (#129)

### Added

- More unit tests for retry logic and fallover

## [0.5.0] - 2023-06-14

### Fixed

- fix the apollo/client import to /core to avoid react dep (#125)

### Changed

- separate the link create function for dict & project (#124)
- rename projectHttpLink to deploymentHttpLink (#126)

## [0.4.0] - 2023-06-13

### Added

- Feat/auth link routing (#122)

## [0.3.4] - 2023-06-13

### Added

- Get networkChainId from authURl (#108)

### Fixed

- Fix runtime error catch for authLink (#120)

## [0.2.1] - 2023-06-13

### Added

- Add Authlink for Apollo client

[unreleased]: https://github.com/subquery/network-clients/compare/v1.0.2...HEAD
[1.0.2]: https://github.com/subquery/network-clients/compare/v1.0.0...v1.0.2
[1.0.0]: https://github.com/subquery/network-clients/compare/v0.5.7...v1.0.0
[0.5.7]: https://github.com/subquery/network-clients/compare/v0.5.5...v0.5.7
[0.5.5]: https://github.com/subquery/network-clients/compare/v0.5.3...v0.5.5
[0.5.3]: https://github.com/subquery/network-clients/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/subquery/network-clients/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/subquery/network-clients/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/subquery/network-clients/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/subquery/network-clients/compare/v0.3.4...v0.4.0
[0.3.4]: https://github.com/subquery/network-clients/compare/v0.2.1...v0.3.4
[0.2.1]: https://github.com/subquery/network-clients/releases/tag/v0.2.1
