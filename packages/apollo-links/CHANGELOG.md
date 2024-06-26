# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.2] - 2024-05-13

## [1.4.1] - 2024-05-12

## [1.4.0] - 2024-04-29

## [1.3.2] - 2024-01-26

## [1.3.0] - 2024-01-22

## [1.2.6] - 2024-01-11

## [1.2.5] - 2023-12-21

## [1.2.4] - 2023-12-21

## [1.2.3] - 2023-11-27

## [1.2.2] - 2023-11-13

## [1.1.0] - 2023-10-13

- Support new communication protocol

## [1.0.8] - 2023-09-07

- Enable base64 encoding for payg signature

## [1.0.4] - 2023-09-01

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

[unreleased]: https://github.com/subquery/network-clients/compare/v1.4.2...HEAD
[1.4.2]: https://github.com/subquery/network-clients/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/subquery/network-clients/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/subquery/network-clients/compare/v1.3.2...v1.4.0
[1.3.2]: https://github.com/subquery/network-clients/compare/v1.3.0...v1.3.2
[1.3.0]: https://github.com/subquery/network-clients/compare/v1.2.6...v1.3.0
[1.2.6]: https://github.com/subquery/network-clients/compare/v1.2.4...v1.2.6
[1.2.5]: https://github.com/subquery/network-clients/compare/v1.2.4...v1.2.5
[1.2.4]: https://github.com/subquery/network-clients/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/subquery/network-clients/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/subquery/network-clients/compare/v1.1.0...v1.2.2
[1.1.0]: https://github.com/subquery/network-clients/compare/v1.0.8...v1.1.0
[1.0.8]: https://github.com/subquery/network-clients/compare/v1.0.4...v1.0.8
[1.0.4]: https://github.com/subquery/network-clients/compare/v1.0.2...v1.0.4
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
